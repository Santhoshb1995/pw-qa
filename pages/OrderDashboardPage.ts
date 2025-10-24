import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrderDashboardPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async assertLoggedIn() {
  }
}
