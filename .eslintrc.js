module.exports = {
    root: true,
    overrides: [
      {
        files: ["*.ts"],
        parserOptions: {
          project: [
            "tsconfig.*?.json",
            "e2e/tsconfig.json"
          ],
          createDefaultProgram: true
        },
        extends: ["plugin:@angular-eslint/recommended",
                  "prettier/@typescript-eslint",
                  "plugin:prettier/recommended"
        ],
        rules: {
          "prettier/prettier": ["error",{
            "endOfLine": "auto"}
          ]
        }
      },
      {
        files: ["*.component.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        rules: {
          "max-len": ["error", { "code": 140 }]
        }
      },
      {
        files: ["*.component.ts"],
        extends: ["plugin:@angular-eslint/template/process-inline-templates"]
      }
    ]
  }
