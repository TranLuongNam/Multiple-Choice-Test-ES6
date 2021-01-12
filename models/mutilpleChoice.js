class MultipleChoice extends Question{
    constructor(type, id, content, answers ){
       super(type, id, content, answers);
    }
    render(index) {
        //return giao dien HTML của câu hỏi!
        let answersHTMLContent = '';

        //id câu trả lời lưu vào value cảu input
        for( let answ of this.answers){
            answersHTMLContent += `
                <div>
                    <input class="question-${this.id}" value="$item._id" type="radio" id="answer-${this.id}">
                    <label>${item.content}</label>
                </div>
            `
        }
        //in ra giao diện 4 đáp án!
        return `
        
            <div>
                <p>Câu ${index}: ${this.content}</p>
                ${answersHTMLContent}
            </div>
        `
    }
    checkExact(){
        //Kiểm tra ô người dùng đã chọn => id câu trả lời
        //Dom 4 input,kiểm tra checked
        const inputList = document.getElementById( `answer - ${this._id}`);

        let answerId;

        for(let input of inputList){
            if(input.checked){

                answerId = input.value;
                break;
            }
        }
        if(!answerId ) return false;
        //kiểm tra exact => true/false
        //tìm ra đối tượng đáp án trong mảng đáp án => exact

        for(let answer of this.answers){
            if(answer._id === answerId){
                return answer.exact;
            }
        }
        return false;
    }

}
