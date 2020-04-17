import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestCreationPage } from './request-creation.page';

describe('RequestCreationPage', () => {
  let component: RequestCreationPage;
  let fixture: ComponentFixture<RequestCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
