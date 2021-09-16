import { Component, OnInit } from '@angular/core';
import { HEROES } from '../service/api';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})

export class QuestionsComponent implements OnInit {

  constructor(private service: ApiService) { }


  questions: any = [];
  options: any = [];
  radioSelected: string = "";
  selectedHero?: any = 0;

  saludo = "cosa"
  onItemChange(option: any): void {
    console.log("option", option)
  }
  ngOnInit(): void {

    ApiService.get("options").then((result) => {
      this.options = result.data;
    })
    ApiService.get("questions").then((result) => {
      let questionsList: any = [];

      result.data.map((item: any) => {
        let options = this.options.filter((e: any) => e.question_id == item.id)
        options.map((item: any) => item["isSelected"] = false)
        let newData = {
          ...item, options,
        }
        questionsList.push(newData)
      })
      this.questions = questionsList
      console.log(questionsList)
    })
  };
  isAllSelected(item: any) {
    this.options.map((val: { id: any; isSelected: boolean; question_id: number }) => {
      if (val.id == item.id) val.isSelected = !val.isSelected;
      else if (val.question_id == item.question_id) {
        val.isSelected = false;
      }
    });
    console.log(item)
  }
  sendAnswer() {
    let optionsSelect = this.options.filter((item: { isSelected: boolean; })=>item.isSelected == true);
    let answers:any[] = [];
    optionsSelect.map((item: { scale: any; user_id: any; question_id: any; survey_id: any; })=>{
      let data = {
        scale: item.scale,
        user_id: 1,
        question_id: item.question_id,
        survey_id: item.survey_id
      }
      answers.push(data)
    })
    console.log("answers",answers)
    ApiService.createAnswer(answers)
  }
}
