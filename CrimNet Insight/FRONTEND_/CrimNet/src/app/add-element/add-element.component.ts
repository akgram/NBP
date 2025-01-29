import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importuj FormsModule

@Component({
  selector: 'app-add-element',
  standalone: true,
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css'],
  imports: [FormsModule]
})
export class AddElementComponent {
  @Output() addElement = new EventEmitter<any>();

  elementType: string = '';
  additionalInfo: string = '';

  onAdd() {
    const elementData = {
      elementType: this.elementType,
      additionalInfo: this.additionalInfo,
    };

    this.addElement.emit(elementData);
    this.clearForm();
  }

  clearForm() {
    this.elementType = '';
    this.additionalInfo = '';
  }
}
