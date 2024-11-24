import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackBar: MatSnackBar) {}

  // Método para exibir uma notificação
  show(message: string, action: string = 'Fechar', duration: number = 3000, config?: MatSnackBarConfig) {
    const snackBarConfig: MatSnackBarConfig = {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    };

    // Exibindo a mensagem no SnackBar
    this.snackBar.open(message, action, snackBarConfig);
  }
}
