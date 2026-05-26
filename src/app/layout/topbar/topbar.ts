import { Component,inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@core/service/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  public authService = inject(AuthService)
  private router = inject(Router);
  public showLogin:boolean = true
  public isAdmin:boolean = false

  private validIsadmin():void{
    const user = this.authService.getUser()
    if(user && user.group == "admin"){
      this.isAdmin = true
    }
  }

  logout(): void{
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
