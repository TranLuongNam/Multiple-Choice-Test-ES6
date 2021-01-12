/**
 * Dự án : Web trắc nghiệm
 * chức năng:
 *      Lấy danh sách câu hỏi từ db
 *      Hiện danh sách câu hỏi ra màn hình
 *      Chấm điểm
 */

 //function 1:Lấy danh sách câu hỏi từ db

 let questionList = [];
 const fetchQuestions = ()=> {
     axios({
         url:'../DeThiTracNghiem.json',
         methods: "GET",
     })
     .then(function(res){
         mapData(res.data);
         console.log(res);
         //render câu hỏi ra màn hình
         renderQuestions();
     })
     .catch(function(err){
         console.log(err);
     });
 }


 //function 2:Hiển thị câu hỏi ra màn hình
 const renderQuestions = () => {
     let htmlContent = '';
     for(let i in questionList){
         htmlContent += questionList[i].render(+i + 1);
     }
     document.getElementById("questionsContainer").innerHTML = htmlContent;
 }


 //function 3:map từ danh sách câu hỏi cua backend ra thành ds đối tượng câu hỏi cảu mình
/**
 * @params (Array) data
 * @returns (Array) questionList
 */
 const mapData = (data) => {
    for(let item of data){
        let myQuestionObject;
        if(item.questionType === 1){
            myQuestionObject = new MultipleChoice(
                item.questionType,
                item._id,
                item.content,
                item.answers);
        }
        else{
            myQuestionObject = new FillinBank(
                item.questionType,
                item._id,
                item.content,
                item.answers
            );
        }
        questionList.push(myQuestionObject);
    } console.log(questionList);
 }


 //function 4:tính điểm,hiện kết quả
 const submit = () => {
     let result = 0;

     for(let question of questionList){
         console.log(question.checkExact())
         if(question.checkExact())
         result++;
     }
     console.log("Kết quả",result + "/" +questionList.length);
 }

 //callback function
 document.getElementById('btnSubmit').addEventListener('click',submit);

 fetchQuestions();  

