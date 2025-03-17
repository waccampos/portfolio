interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate(props: EmailTemplateProps) {
  const { name, email: fromEmail, subject, message } = props;
  return (
    <div className="h-full w-full">
      <h2 className="text-lg">
        {name} - {fromEmail}
      </h2>
      <h3 className="text-md">{subject}</h3>
      <p>{message}</p>
    </div>
  );
}
