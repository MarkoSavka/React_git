import { useFormik } from "formik";
import * as Yup from 'yup';

//formik це хук
function App(){
  const proffessions=['Developer','Designer','Other'];
  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      proffessions:proffessions[0],
      age:''
    },
    onSubmit:function(values){
      alert(`Name:${values.name} Email:${values.email} Proffession:${values.proffessions} Age:${values.age}`);
    },
    validationSchema:Yup.object({ //Yup-псевдонім,object-функція
      name:Yup.string().label('Name').required(),
      email:Yup.string().email().required(),
      proffession:Yup.string().oneOf(proffessions,"The profession you chose doesnt exist"),
      age:Yup.number().min(18,'You are younger then 18').required()
    })
  });

  //formik.handleChange обробник зміни дії елементів
  //formik.handleBlur функція колиелемент втрачає фокус
  //formik.values.name (initialValues),там ми задали нейм пустим,тому ми привʼязуємо це до цього інпуту шоб там теж було пусто
  return(
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Register</h1>
        <div>
          <label for="name">Name:</label>
          <input name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} title="Input Name"></input>
          {
            //валідація даних
            //touched-обʼєкт який вказує чи користувач взаємодіяв з цим полем
            //errors буде якшо не пройде валідацію
            formik.touched.name && formik.errors &&(
              <span>{formik.errors.name}</span>
            )
          }
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
          {
            //валідація даних
            //touched-обʼєкт який вказує чи користувач взаємодіяв з цим полем
            //errors буде якшо не пройде валідацію
            formik.touched.email && formik.errors &&(
              <span>{formik.errors.email}</span>
            )
          }
        </div>

        <label for="proffessions">Profession</label>
        <select id="proffessions" name="proffessions" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.proffessions}>
          {
            proffessions.map((proffession,index)=>(
              <option value={proffession} key={index}>{proffession}</option>
            ))
          }
          </select>
           {
            formik.touched.proffession && formik.errors &&(
              <span>{formik.errors.proffession}</span>
            )
          }

        <div>
          <label for="age">Age:</label>
          <input name="age" id="age" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age}></input>
          {
            //валідація даних
            //touched-обʼєкт який вказує чи користувач взаємодіяв з цим полем
            //errors буде якшо не пройде валідацію
            formik.touched.age && formik.errors &&(
              <span>{formik.errors.age}</span>
            )
          }
        </div>

        <div>
          <button type="submit" disabled={!(formik.isValid&&formik.dirty)}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App;
