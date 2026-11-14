# Guía de práctica · Sesión 2

Claude Code: el entorno de trabajo. Tres ejercicios sobre este repositorio.

## 0. Antes de empezar

```
git clone https://github.com/SaulSua/banco-practica.git
cd banco-practica
node -v            (18 o superior)
claude --version
npm test           (11 pruebas pasan, 1 falla a propósito)
```

Si descargó el zip en vez de clonar, deje la carpeta en Git: `git init`, `git add .`, `git commit -m "inicio"`.

## 1. Conocer el repositorio (8 min)

Escriba `claude` en la carpeta del proyecto y haga estos dos pedidos. Mire qué archivos lee y qué comandos le pide ejecutar.

> Explícame este repositorio: qué hace, cómo está organizado y cómo se corren las pruebas. No cambies nada.

> ¿Qué hace src/heredado/extracto.js? ¿Qué riesgos le ves? No lo modifiques.

## 2. La prueba que falla, con plan mode (9 min)

1. Corra `npm test` y lea cuál prueba falla.
2. En Claude Code, **Shift + Tab** hasta que diga plan mode, y haga el pedido.
3. Lea el plan con las cuatro preguntas: ¿entendió el problema?, ¿qué archivos toca?, ¿cómo lo comprueba?, ¿hace algo que no pedí?
4. Apruebe o corrija. Al terminar, corra usted `npm test` y `git diff`.

> Una prueba falla. Encuentra la causa y propón cómo corregirla. La regla de negocio está en el README.

## 3. Constitución y CLAUDE.md, en equipo (14 min)

1. Escriba `/init` y lea el CLAUDE.md que genera. Es un borrador.
2. Copie `docs/constitucion.plantilla.md` como `docs/constitucion.md` y haga el pedido A.
3. Haga el pedido B. Después `/clear` y el pedido C: tiene que responder sin ayuda.
4. `git add .` y `git commit -m "constitucion y CLAUDE.md"`

> **A.** Entrevístame para completar docs/constitucion.md. Una pregunta a la vez. Lo que puedas saber leyendo el código, propónmelo.

> **B.** Deja CLAUDE.md importando @docs/constitucion.md y, debajo, solo comandos, estructura y convenciones. Que sea corto.

> **C.** ¿Cuáles son los principios de este proyecto y cómo se corren las pruebas?

## Comandos

| Comando | Para qué |
|---|---|
| `Shift + Tab` | Cambiar de modo (plan mode) |
| `Esc` | Interrumpir al agente |
| `@archivo` | Nombrar un archivo en el pedido |
| `/context` | Ver qué ocupa la ventana |
| `/clear` | Conversación en blanco |
| `/compact` | Resumir y seguir |
| `/model` | Cambiar de modelo |
| `/rewind`, `/resume` | Volver atrás, retomar una sesión |

## Las cinco reglas de hoy

1. Se lee lo que se aprueba. Si no se entiende, la respuesta es no.
2. Plan mode antes de tocar código real.
3. Cuando una prueba falla, decide la regla de negocio, no el agente.
4. Lo que tiene que durar va a un archivo.
5. Una tarea, una sesión.

Siempre: ningún dato de clientes, secreto ni credencial entra a la IA ni al repositorio.
