#!/bin/bash

# ARCII Cloud CRM/ERP Setup Script
# Fecha: 18 Enero 2026

echo "🚀 ARCII Cloud CRM/ERP - Setup Inicial"
echo "======================================"

echo ""
echo "📦 Instalando dependencias..."
npm install

echo ""
echo "🔧 Configurando variables de entorno..."
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "✅ Archivo .env.local creado desde .env.example"
    echo "⚠️  IMPORTANTE: Configura las variables de entorno en .env.local antes de continuar"
else
    echo "✅ Archivo .env.local ya existe"
fi

echo ""
echo "🔥 Verificando configuración de Firebase..."
if command -v firebase &> /dev/null; then
    echo "✅ Firebase CLI instalado"
else
    echo "⚠️  Firebase CLI no encontrado"
    echo "   Instala con: npm install -g firebase-tools"
fi

echo ""
echo "🧪 Ejecutando verificaciones..."
npm run type-check

echo ""
echo "✅ Setup inicial completado!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Configurar variables de entorno en .env.local"
echo "2. Crear proyecto Firebase y obtener credenciales"
echo "3. Configurar certificados SAT para facturación México"
echo "4. Ejecutar: npm run dev para desarrollo local"
echo "5. Ejecutar: npm run firebase:emulators para emuladores Firebase"
echo ""
echo "📚 Consulta PROJECT_PLAN.md para el plan completo de desarrollo"
echo ""