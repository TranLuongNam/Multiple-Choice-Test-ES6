class FillinBank extends Question{
    constructor(type,id,content,answers){
        super(type,id,content,answers);
    }
    render(index){
        return `
        <div>
        <p>Câu ${index}: ${this.content}</p>
        <input type="text" id="answer-${this._id}">
    </div>
        `;
    }
    checkExact(){
        //1.dọn tới input => value
        let value = document.getElementById(`answer-${this._id}`).value;
        value = value.toLowerCase();
        //2.check value === answers[0].content => true.
        const answer = this.answers[0].content.toLowerCase();
        if(value === answer) return true;
        return false;
    }
}


