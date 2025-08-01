import React, { useState } from 'react';
import UploadForm from './UploadForm.jsx';
import QAChat from './QAChat.jsx';

const App = () => {
  const [sessionId, setSessionId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🧙‍♂️ Report Magician</h1>
      <UploadForm
        setSessionId={setSessionId}
        setProjectName={setProjectName}
        setEmail={setEmail}
      />
      <QAChat sessionId={sessionId} projectName={projectName} email={email} />
    </div>
  );
};

export default App;