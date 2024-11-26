import { Actor, Task} from '@testla/screenplay';
import { BrowseTheWeb} from '@testla/screenplay-playwright/web';

export class ScrollDown extends Task {

  static onGuaranteesPage(): ScrollDown {
    return new ScrollDown();
  }

  async performAs(actor: Actor): Promise<void> {
    const browser = BrowseTheWeb.as(actor);
    await browser.page.evaluate(() => window.scrollBy(0, 500));
  }
}