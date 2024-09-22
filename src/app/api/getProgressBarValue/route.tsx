import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Autenticação usando as variáveis de ambiente
    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        client_email: process.env.GCP_CLIENT_EMAIL,
      },
      projectId: process.env.GCP_PROJECT_ID,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1xacNyd-nnn2NprkPpVTpeN7CH_FjVa1GgLrCgLpM9Yc';  // Substitua pelo ID real da sua planilha
    const range = 'Dashboard!G16:H19';  // Substitua com o intervalo desejado

    // Fazendo a requisição para obter os valores
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // Obtendo o valor retornado pela planilha
    const goal = response.data.values[0][0];
    const totalRaised = response.data.values[2][0];

    // Retornando a resposta JSON com o valor da célula
    return NextResponse.json({ totalRaised, goal });

  } catch (error) {
    // Log de erro para ajudar no debug
    console.error('Erro ao acessar Google Sheets:', error);

    // Retorna um erro 500 com uma mensagem
    return NextResponse.json({ error: 'Failed to fetch data from Google Sheets' }, { status: 500 });
  }
}
