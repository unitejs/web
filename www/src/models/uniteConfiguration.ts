/**
 * Model of Unite Configuration (unite.json) file.
 */
export class UniteConfiguration {
    public packageName: string;
    public title: string;
    public license: string;
    public applicationFramework: string;
    public moduleType: string;
    public bundler: string;
    public sourceLanguage: string;
    public linter: string;
    public unitTestRunner: string;
    public unitTestFramework: string;
    public unitTestEngine: string;
    public e2eTestRunner: string;
    public e2eTestFramework: string;
    public cssPre: string;
    public cssPost: string;
    public packageManager: string;
    public outputDirectory: string;
}