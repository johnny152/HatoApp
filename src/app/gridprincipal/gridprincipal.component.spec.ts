import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridprincipalComponent } from './gridprincipal.component';

describe('GridprincipalComponent', () => {
  let component: GridprincipalComponent;
  let fixture: ComponentFixture<GridprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridprincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
