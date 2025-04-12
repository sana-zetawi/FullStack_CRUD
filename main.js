const name =document.querySelector("#courseName");
const category =document.querySelector("#courseCategory");
const price =document.querySelector("#coursePrice");
const description =document.querySelector("#courseDescription");
const capacity =document.querySelector("#courseCapacity");
const addButt =document.querySelector("#click");
let courses=[];
if(localStorage.getItem('courses') !=null){
    courses=JSON.parse(localStorage.getItem('courses'));
    displayCourses();
}
addButt.addEventListener('click',(e)=>{
    e.preventDefault();
    const course={
        'name':name.value,
        'category':category.value,
        'price':price.value,
        'description':description.value,
        'capacity':capacity.value,
    };
    courses.push(course);
    localStorage.setItem('courses',JSON.stringify(courses));
    displayCourses();

});
function displayCourses(){
    console.log(courses);
    const result=courses.map((course,index)=>{
        return `
        <tr>
        <td>${index}</td>
        <td>${course.name}</td>
        <td>${course.category}</td>
        <td>${course.price}</td>
        <td>${course.description}</td>
        <td>${course.capacity}</td>
        </tr>
        `;
    }).join(' ');
    document.querySelector('#data').innerHTML=result;
}