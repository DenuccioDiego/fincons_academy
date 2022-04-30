
export class CrudUtils {

    public static deleteFromArray(object: Object, args: any[]): any[] {

        return args.filter(el => el !== object);

    }
}