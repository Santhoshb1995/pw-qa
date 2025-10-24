import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private emailInput = "#email";
  private passwordInput = "#password";
  private loginButton = "loginButton" ;

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    // need to make sure it uses baseurl from config
  }

  async login(email: string, password: string) {

  }
}
