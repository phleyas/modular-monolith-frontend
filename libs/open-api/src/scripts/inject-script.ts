import {
  setActiveProject,
  createProject,
  NgMorphTree,
  getClasses,
  getParams,
  getConstructors,
  getImports,
  editImports,
  saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts', '**/*.json']));

const services = getClasses('**/*.ts', {
  name: '*Service',
});

services.forEach(service => {
  const constructorParams = getParams(getConstructors(service)[0]);

  if (constructorParams.length === 0) {
    return;
  }

  fixInjectImport(service.getSourceFile().getFilePath());

  service.insertProperties(
    0,
    constructorParams.map(param => ({
      name: param.getName(),
      type: param.getTypeNode()?.getText(),
      isReadonly: param.isReadonly(),
      scope: param.getScope(),
      initializer: `inject(${
        param.getDecorator('Inject')?.getArguments()[0].getText() ?? param.getTypeNode()?.getText()
      })`,
    }))
  );

  constructorParams.forEach(param => {
    param.remove();
  });

  console.log(service.getSourceFile().getText());
});

// Uncomment the next line once you are ready to save the changes
saveActiveProject();

console.log('Uncomment saveActiveProject function once you are ready to save...');
console.log('ng-morph ✅');

function fixInjectImport(file: string) {
  const angularCoreImports = getImports(file, {
    moduleSpecifier: '@angular/core',
  });

  editImports(angularCoreImports, entity => ({
    namedImports: [...entity.namedImports, 'inject'],
  }));
}
