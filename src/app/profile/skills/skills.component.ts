import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../Services/skills.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public userData = [];
  public skillName1 = '';
  public strObj;
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.skillsService.getSkills().subscribe(data => {
      this.userData = data
      console.log(this.userData[0].profile.skills)
    });
  }

  addskillDatabase(forms:NgForm,skill: string) {
    var flag = false;
    for (var data of this.userData[0].profile.skills) {
      if (data != skill) {
        flag = true;
      }
      else {
        flag = false;
        return;
      }
    }
    if (flag == true) {
      this.skillName1 = skill;
      this.skillsService.addSkills(this.skillName1).subscribe(data => this.userData = data)
    }
    else if(flag==false) {
      alert("Already Exists!!!");
    }
    forms.resetForm();
  }

removeSkills(skill: string) {
  this.skillsService.removeSkills(skill).subscribe(data => this.userData = data);
}

}
