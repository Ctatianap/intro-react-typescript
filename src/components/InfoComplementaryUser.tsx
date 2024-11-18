import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateInfoComplUser } from '../firebase/helper/requestProducts'

export interface FormValues {
  height: number,
  weight: number,
  age: number,
  gender: string
}

const InfoComplementaryUserForm = () => {
  const initialValues: FormValues = {
    height: 0,
    weight: 0,
    age: 0,
    gender: ''
  }

  const validationSchema = Yup.object().shape({
    //Yup.type().condition1().condition2()....
    height: Yup.number()
      .required("la altura es requerida")
      .positive("la altura debe ser un valor positivo")
      .min(50, "altura min de 50cm")
      .max(250, "la altura max es de 250 cm"),
    weight: Yup.number()
      .required("El peso es requerido")
      .positive("El peso debe ser un valor positivo")
      .min(30, "El peso min es de 30 kg")
      .max(400, "El peso max es de 400kg"),
      age: Yup.number()
      .required('La edad es requerida')
      .positive('La edad debe ser positiva')
      .min(1, 'La edad mínima es 1 año')
      .max(120, 'La edad máxima es 120 años'),
      gender: Yup.string()
      .required('El sexo es requerido')
      .oneOf(['male', 'female'], 'Elige un género válido'),
  })

  const calculateIMC = (weight:number, height:number) => {
    // es el peso en kg dividido por la estatura en metros cuadrados
      const heightInMeters = height / 100
      return (weight / (heightInMeters*heightInMeters)).toFixed(2)
  }


  const updateInfoUser = async (values: FormValues) => {
    const userId = "HFiHeFDFJ83GGQVvli9n"; 
    try {
      await updateInfoComplUser(userId, values);
      console.log("Datos enviados al backend:", values);
    } catch (error) {
      console.error("Error al actualizar la información:", error);
    }
  };
  
  return (
   <div className='max-w-md bg-white mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-md'>
      <h1>Información complementaria</h1>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values,)=>{
          const imc = calculateIMC(values.weight, values.height)
          alert(`tu imc es de:  ${imc}`);
          updateInfoUser(values)
        }}>
          <Form>
            <div className='mb-4'>
              <label className='text-gray-700 font-medium mb-1'>Altura (cm)</label>
              <Field 
                type="number"
                name="height"
                className="w-full px-4 border rounded-md"/>
              <ErrorMessage
                name='height'
                component="div"
                className='text-red-500 '
              />
            </div>
            <div className='mb-4'>
              <label className='text-gray-700 font-medium mb-1'>Peso (kg)</label>
              <Field 
                type="number"
                name="weight"
                className="w-full px-4 border rounded-md"/>
              <ErrorMessage
                name='weight'
                component="div"
                className='text-red-500 '
              />
            </div>
            <div className='mb-4'>
              <label className='text-gray-700 font-medium mb-1'>Edad</label>
              <Field 
                type="number"
                name="age"
                className="w-full px-4 border rounded-md"/>
              <ErrorMessage
                name='age'
                component="div"
                className='text-red-500 '
              />
            </div>
            <div className='mb-4'>
              <label className='text-gray-700 font-medium mb-1'>Genero </label>
              <Field 
                as="select"
                name="gender"
                className="w-full px-4 border rounded-md">
                <option value=""></option>
                <option value="male">Masculino</option>
                <option value="Female">Femenino</option>
              </Field>  
              <ErrorMessage
                name='gender'
                component="div"
                className='text-red-500 '
              />
            </div>
            
            <button type='submit' className='bg-blue-500 text-white rounded-full px-4 p-2'>
                Enviar
            </button>
          </Form>
      </Formik>
   </div>
  );
};

export default InfoComplementaryUserForm;
