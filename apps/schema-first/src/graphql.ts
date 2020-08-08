
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Author {
    id: number;
    firstName?: string;
    lastName?: string;
}

export abstract class IQuery {
    abstract author(id: number): Author | Promise<Author>;
}
