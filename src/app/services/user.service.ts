import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take, map } from 'rxjs/operators';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Método para obter todos os usuários
  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API).pipe(
      take(1),
      catchError(error => {
        console.error('Erro ao buscar os usuários:', error);
        return throwError(() => new Error('Erro ao buscar os usuários'));
      })
    );
  }

  // Método para obter um usuário específico pelo ID
  getByID(userId: string): Observable<IUser> {
    const url = `${this.API}/${userId}`;
    return this.http.get<IUser>(url).pipe(
      take(1),
      catchError(error => {
        console.error(`Erro ao buscar o usuário com ID ${userId}:`, error);
        return throwError(() => new Error('Erro ao buscar o usuário'));
      })
    );
  }

  // Método para criar um novo usuário
  post(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.API, user).pipe(
      catchError(error => {
        console.error('Erro ao criar o usuário:', error);
        return throwError(() => new Error('Erro ao criar o usuário'));
      })
    );
  }

  // Método para atualizar um usuário existente
  put(user: IUser): Observable<IUser> {
    const url = `${this.API}/${user.id}`;
    return this.http.put<IUser>(url, user).pipe(
      catchError(error => {
        console.error(`Erro ao atualizar o usuário com ID ${user.id}:`, error);
        return throwError(() => new Error('Erro ao atualizar o usuário'));
      })
    );
  }

  // Método para deletar um usuário
  delete(id: string): Observable<void> {
    const url = `${this.API}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(error => {
        console.error(`Erro ao excluir o usuário com ID ${id}:`, error);
        return throwError(() => new Error('Erro ao excluir o usuário'));
      })
    );
  }

  // Método para autenticar o usuário (login)
  login(username: string, password: string): Observable<IUser> {
    return this.http.get<IUser[]>(this.API).pipe(
      map(users => {
        // Buscar o usuário que tenha o nome de usuário e senha correspondentes
        const user = users.find(u => u.name === username && u.password === password);
        if (user) {
          return user;  // Retorna o usuário encontrado
        } else {
          throw new Error('Credenciais inválidas');  // Erro caso o usuário não seja encontrado
        }
      }),
      catchError(error => {
        console.error('Erro ao tentar fazer login:', error);
        return throwError(() => new Error('Erro ao tentar fazer login'));
      })
    );
  }
}
