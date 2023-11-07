import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


document.addEventListener("click", function(){
  document.getElementById("gonder") = alert("Giriş Yaptınız");;
});