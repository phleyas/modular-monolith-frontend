import { ChangeDetectionStrategy, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dropdown<T = unknown> {
  menu = viewChild<ElementRef<HTMLElement>>('dropdownMenu');

  label = input<string>('');
  disabled = input<boolean>(false);
  payload = input<T[]>([]);
  clicked = output<T>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labelFn = input<(item: T) => string>((item: any) => item?.label ?? String(item));

  onClicked(item: T) {
    this.menu()?.nativeElement.classList.add('hidden');
    this.clicked.emit(item);
  }
  
  toggleDropdown() {
    this.menu()?.nativeElement.classList.toggle('hidden');
  }
}
