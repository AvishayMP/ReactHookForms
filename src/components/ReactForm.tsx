import { useForm } from 'react-hook-form';
interface FormData {
  username: string;
  email: string;
  password: string;
}

function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const onSubmit =
    (data: FormData): void => {
      alert(JSON.stringify(data));
      reset();
    };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <h1>This is using React Hook Form</h1>
      <div>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "User name is required!",
            minLength: {
              value: 2,
              message: 'minimmum length must be 2'
            }
          })}
          placeholder='Enter UserName'
        />
        {errors?.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
          placeholder='Enter Email'
        />
         {errors?.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required!",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+])[A-Za-z\d!@#$%^&*()-+]{8,20}$/,
              message: `passwords must contain number,\n big letter,\n
               small letter,\n
                spacial character,\n
                 mininmum 8 characters and not more then 20 characters.`
            }
          })}
          placeholder='Enter Password'
        />
         {errors?.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactForm;
