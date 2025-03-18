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
      fontFamily: "Helvetica, Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    {/* En-tête */}
    <div
      style={{
        backgroundColor: "#ec4899",
        padding: "20px",
        textAlign: "center",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <h1
        style={{
          color: "white",
          margin: 0,
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Nouveau message depuis votre portfolio
      </h1>
    </div>

    {/* Corps du message */}
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f9fafb",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td
              style={{ padding: "15px 0", borderBottom: "1px solid #e5e7eb" }}
            >
              <strong style={{ color: "#6b7280", minWidth: "80px" }}>
                Expéditeur:
              </strong>
              <span style={{ color: "#111827", marginLeft: "10px" }}>
                {name}
              </span>
            </td>
          </tr>

          <tr>
            <td
              style={{ padding: "15px 0", borderBottom: "1px solid #e5e7eb" }}
            >
              <strong style={{ color: "#6b7280" }}>Email:</strong>
              <a
                href={`mailto:${email}`}
                style={{
                  color: "#3b82f6",
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
              >
                {email}
              </a>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "15px 0" }}>
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    marginBottom: "8px",
                  }}
                >
                  Message :
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    lineHeight: "1.6",
                    color: "#374151",
                  }}
                >
                  {message.split("\n").map((line, i) => (
                    <p key={i} style={{ margin: "8px 0" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Pied de page */}
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        color: "#6b7280",
        fontSize: "12px",
      }}
    >
      <p style={{ margin: "4px 0" }}>
        Cet email a été envoyé depuis le formulaire de contact de votre
        portfolio
      </p>
      <p style={{ margin: "4px 0" }}>{new Date().toLocaleDateString()}</p>
    </div>
  </div>
);
