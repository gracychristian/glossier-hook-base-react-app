import { ErrorMessage, useField } from 'formik';
import React from 'react'

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    // <div className="mb-2">
    //   <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={field.name}>
    //     {label}
    //   </label>
    //   <input
    //     class={`
    //     ${meta.touched && meta.error && "is-invalid"
    //       }
    //       appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
    //     {...field}
    //     {...props}
    //     autoComplete="off"
    //   />
    //   <ErrorMessage component="div" name={field.name} className="error" />
    // </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={field.name}>
          {label}
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class={` ${meta.touched && meta.error && "is-invalid"
            } shadow-xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
          {...field}
          {...props}
          autoComplete="off"
        />
        <ErrorMessage component="div" name={field.name} className="error" />
      </div>
    </div>
  )
}

export default TextField;
