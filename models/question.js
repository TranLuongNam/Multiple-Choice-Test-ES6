// function Question( type, id, content, answers){
//     this.questionType =type ;
//     this.id = id;


// }
class Question{
    constructor(type, id, content, answers ){
        this.question = type;
        this._id = id;
        this.content = content;
        this.answers = answers;
    }
    render() { }
    checkExact(){ }

}
// const newQuestion = new Question(1,10,'aaaaaaaaa',[]);
// console.log (newQuestion);