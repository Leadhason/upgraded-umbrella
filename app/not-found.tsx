import Link from "next/link"

export default function NotFound() {
  return (
    <div 
      style={{ 
        display: "flex", 
        minHeight: "100vh", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "1rem",
        backgroundColor: "black",
        color: "white"
      }}
    >
      <div style={{ maxWidth: "28rem", textAlign: "center" }}>
        <h1 style={{ 
          marginBottom: "0.5rem", 
          fontSize: "3.75rem", 
          fontWeight: "bold",
          color: "#D4AF37"
        }}>
          404
        </h1>
        <h2 style={{ 
          marginBottom: "1rem", 
          fontSize: "1.875rem", 
          fontWeight: "bold" 
        }}>
          Page Not Found
        </h2>
        <p style={{ marginBottom: "2rem", fontSize: "1.125rem" }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          style={{ 
            backgroundColor: "#D4AF37",
            color: "black",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.25rem",
            fontWeight: "500",
            textDecoration: "none",
            transition: "background-color 0.2s"
          }}
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}