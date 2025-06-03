import React, { useEffect, useState } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';

function ItalianCuisine() {
  const targetValues = [
    { label: 'Świeże składniki', value: 95, variant: 'success' },
    { label: 'Proste techniki', value: 85, variant: 'info' },
    { label: 'Ser i oliwa z oliwek', value: 90, variant: 'warning' },
    { label: 'Kultura i tradycja', value: 100, variant: 'danger' },
  ];

  const [progress, setProgress] = useState(targetValues.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev =>
        prev.map((val, i) =>
          val < targetValues[i].value ? val + 1 : val
        )
      );
    }, 20); 

    const isComplete = progress.every((val, i) => val >= targetValues[i].value);
    if (isComplete) clearInterval(interval);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <section id="about" className="bg-white py-5 italian-background">
      <Container>
        <h2 className="mb-4 text-center">O kuchni włoskiej</h2>
        {targetValues.map((feature, idx) => (
          <div key={idx} className="mb-4">
            <h5>{feature.label}</h5>
            <ProgressBar
              now={progress[idx]}
              label={`${progress[idx]}%`}
              variant={feature.variant}
              animated
              striped
            />
          </div>
        ))}
      </Container>
    </section>
  );
}

export default ItalianCuisine;
