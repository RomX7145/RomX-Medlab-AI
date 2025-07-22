import React, { useState } from 'react';

const Diagnosis = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const getDiagnosis = async () => {
    const prompt = `Patient is a ${age}-year-old ${gender} with symptoms: ${symptoms}. What are the likely diagnoses?`;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await response.json();
    setResult(data.choices[0].message.content);
  };

  return (
    <div className="p-6">
      <input className="border w-full p-2" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
      <select className="border w-full p-2 mt-2" value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <textarea className="border w-full p-2 mt-2" placeholder="Symptoms" value={symptoms} onChange={e => setSymptoms(e.target.value)} />
      <button onClick={getDiagnosis} className="bg-blue-500 text-white px-4 py-2 mt-2">Get Results</button>
      {result && <div className="mt-4 p-4 bg-green-100">{result}</div>}
    </div>
  );
};

export default Diagnosis;
