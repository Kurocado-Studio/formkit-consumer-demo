import React from 'react';

interface FormSelectorProperties {
  currentFormId: string;
  availableFormOptions: Array<
    {
      label: string;
      value: string;
    } & React.DetailsHTMLAttributes<HTMLOptionElement>
  >;
  handleSetFormId: (formId: string) => void;
}
export function FormSelector({
  currentFormId,
  availableFormOptions,
  handleSetFormId,
}: FormSelectorProperties) {
  const handleFormIdOptionChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    handleSetFormId(value);
  };

  return (
    <div className='relative mt-2 inline-block'>
      <select
        value={currentFormId}
        onChange={handleFormIdOptionChange}
        className='focus:shadow-outline prose prose-sm block h-12 w-full appearance-none rounded rounded-full border border-gray-200 bg-white px-4 py-2 pr-8 leading-tight hover:border-gray-400 focus:outline-none'
      >
        {availableFormOptions.map((formOption) => (
          <option
            disabled={formOption.value === currentFormId}
            key={formOption.value}
            value={formOption.value}
          >
            {formOption.label}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='h-4 w-4 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  );
}
