export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const downloadCV = () => {
  // TODO: Add actual CV file path
  const cvPath = '/cv.pdf';
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'Muhammad-Oki-Ramadhan-CV.pdf';
  link.click();
};
