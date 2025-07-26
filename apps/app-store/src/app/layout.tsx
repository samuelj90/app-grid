import './global.css';

export const metadata = {
  title: 'APP GRID | App Store UI',
  description: 'An app store for showcasing applications of app-grid',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
