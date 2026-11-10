import './Card.css';

export interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ title, subtitle, children, footer }: CardProps) {
  return (
    <section className="card">
      <header className="card__header">
        <h3 className="card__title">{title}</h3>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
      </header>
      {children && <div className="card__body">{children}</div>}
      {footer && <footer className="card__footer">{footer}</footer>}
    </section>
  );
}
