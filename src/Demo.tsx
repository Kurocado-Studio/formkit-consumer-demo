import { Card } from '@kurocado-studio/systemhaus-react';
import React from 'react';

import { MyFormKitRenderer } from './components/FormKitFormRenderer';
import { FormSelector } from './components/FormSelector';
import { KUROCADO_STUDIO_DEMO_LONG_FORM_ID } from './config/constants';
import { themeOptions } from './config/themeOptions';

export function Demo() {
  const [formId, setFormId] = React.useState<string>(
    KUROCADO_STUDIO_DEMO_LONG_FORM_ID,
  );

  return (
    <Card className='mx-auto max-w-screen-sm'>
      <Card.Header>
        <h1 className={'mb-2'}>
          <strong>FormKit Consumer Demo</strong>
        </h1>
        <h2 className={'mb-2'}>
          This demo shows how FormKit renders forms, allowing end-users to
          interact with them and submit their responses.
        </h2>
        <FormSelector
          currentFormId={formId}
          availableFormOptions={themeOptions}
          handleSetFormId={setFormId}
        />
      </Card.Header>
      <Card.Body className='space-y-4'>
        <MyFormKitRenderer formId={formId} />
        <button
          disabled
          className='mt-8 cursor-not-allowed rounded rounded-full bg-blue-500 px-4 py-2 font-bold text-white opacity-50'
        >
          Validate (coming soon)
        </button>
      </Card.Body>
    </Card>
  );
}
