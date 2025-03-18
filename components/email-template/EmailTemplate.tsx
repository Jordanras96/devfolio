import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "'Imprima', Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#EFEFEF",
      borderRadius: "20px",
    }}
  >
    {/* Corps principal */}
    <div
      style={{
        padding: "40px 40px 30px",
        backgroundColor: "#fafafa",
        margin: "20px 40px",
        borderRadius: "10px",
      }}
    >
      <h3
        style={{
          fontSize: "28px",
          color: "#2D3142",
          margin: "0 0 20px 0",
          fontWeight: "bold",
        }}
      >
        Nouveau message de {name}
      </h3>

      <div
        style={{
          borderBottom: "1px solid #666666",
          marginBottom: "30px",
          paddingBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#2D3142",
            lineHeight: "27px",
            margin: "0 0 15px 0",
          }}
        >
          <strong>Email :</strong>{" "}
          <a
            href={`mailto:${email}`}
            style={{
              color: "#7630f3",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {email}
          </a>
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <h4
          style={{
            fontSize: "20px",
            color: "#2D3142",
            margin: "0 0 15px 0",
          }}
        >
          Message :
        </h4>
        <div
          style={{
            color: "#4a4a4a",
            lineHeight: "1.6",
            fontSize: "16px",
          }}
        >
          {message.split("\n").map((line, i) => (
            <p key={i} style={{ margin: "10px 0" }}>
              {line}
            </p>
          ))}
        </div>
      </div>

      <p
        style={{
          fontSize: "16px",
          color: "#666666",
          textAlign: "center",
          margin: "40px 0 0",
        }}
      >
        Ce message a été envoyé via le formulaire de contact de votre portfolio
      </p>
    </div>

    {/* Pied de page */}
    <div
      style={{
        backgroundColor: "#bcb8b1",
        padding: "20px 40px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          color: "#2D3142",
          margin: "10px 0",
        }}
      >
        {new Date().toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p
        style={{
          fontSize: "12px",
          color: "#4a4a4a",
          margin: "10px 0",
        }}
      >
        © {new Date().getFullYear()} Jordan Ny Riantsoa RASOLOARISON - Tous
        droits réservés
      </p>
    </div>
  </div>
);
