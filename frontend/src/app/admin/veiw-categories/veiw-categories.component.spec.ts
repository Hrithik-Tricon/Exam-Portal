import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwCategoriesComponent } from './veiw-categories.component';

describe('VeiwCategoriesComponent', () => {
  let component: VeiwCategoriesComponent;
  let fixture: ComponentFixture<VeiwCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiwCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
