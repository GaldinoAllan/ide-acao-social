import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const keyFilePath = path.join(process.cwd(), 'acao-social-natal-a3bd4f3b9657.json');

export async function GET() {
  try {
    // Autenticação usando a chave de API do Google
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],  // Permissão de leitura
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1xacNyd-nnn2NprkPpVTpeN7CH_FjVa1GgLrCgLpM9Yc';  // Substitua pelo ID real da sua planilha
    const range = 'Dashboard!G18:H19';  // Substitua com o intervalo desejado

    // Fazendo a requisição para obter os valores
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // Obtendo o valor retornado pela planilha
    const value = response.data.values[0][0];

    // Retornando a resposta JSON com o valor da célula
    return NextResponse.json({ value });

  } catch (error) {
    // Log de erro para ajudar no debug
    console.error('Erro ao acessar Google Sheets:', error);

    // Retorna um erro 500 com uma mensagem
    return NextResponse.json({ error: 'Failed to fetch data from Google Sheets' }, { status: 500 });
  }
}
