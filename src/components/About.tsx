import { Container } from "./Container";

export function About() {
  return (
    <div id="o-nas" className="px-6 py-20 lg:px-14 bg-lime-600/20">
      <h3 className="text-4xl font-bold tracking-tight text-center">O nas</h3>
      <p className="w-full mx-auto mt-6 text-lg font-light tracking-tight text-center text-gray-200 md:w-1/2">
        Klub Portfit w Elblągu to doskonale wyposażona siłowania oferująca m.in.
        ćwiczenia fitness power, kardio, a także szeroki zakres zajęć grupowych,
        rollmasaz i vacupower. Wszystkich zainteresowanych serdecznie zapraszamy
        do kontaktu.
      </p>
      <Container className="flex items-center justify-center mt-12 overflow-hidden rounded-md shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.859578094909!2d19.4012466!3d54.182562700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd4c76138ce9cf%3A0xed86c7716d48e6fa!2sRobotnicza%20236%2C%2082-300%20Elbl%C4%85g!5e0!3m2!1sen!2spl!4v1688506625715!5m2!1sen!2spl"
          width="100%"
          height="450"
          style={{ border: "none" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </div>
  );
}
