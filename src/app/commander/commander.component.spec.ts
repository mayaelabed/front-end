import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderComponent } from './commander.component';

describe('CommanderComponent', () => {
  let component: CommanderComponent;
  let fixture: ComponentFixture<CommanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommanderComponent]
    });
    fixture = TestBed.createComponent(CommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
