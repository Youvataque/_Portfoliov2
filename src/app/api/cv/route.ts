import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const cvPath = join(process.cwd(), 'public', 'cv.pdf');
    const cvBuffer = await readFile(cvPath);
    
    return new NextResponse(cvBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="cv.pdf"'
      },
    });
  } catch (error) {
    return new NextResponse('CV non trouvé', { status: 404 });
  }
}
