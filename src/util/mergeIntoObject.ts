import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnfoldObservable } from '../types/util';

export function mergeIntoObject<T1>(t1: T1): Observable<UnfoldObservable<T1>>;
export function mergeIntoObject<T1, T2>(
    t1: T1,
    t2: T2,
): Observable<UnfoldObservable<T1> & UnfoldObservable<T2>>;
export function mergeIntoObject<T1, T2, T3>(
    t1: T1,
    t2: T2,
    t3: T3,
): Observable<
    UnfoldObservable<T1> & UnfoldObservable<T2> & UnfoldObservable<T3>
>;
export function mergeIntoObject<T1, T2, T3, T4>(
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
): Observable<
    UnfoldObservable<T1> &
        UnfoldObservable<T2> &
        UnfoldObservable<T3> &
        UnfoldObservable<T4>
>;
export function mergeIntoObject<T1, T2, T3, T4, T5>(
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
): Observable<
    UnfoldObservable<T1> &
        UnfoldObservable<T2> &
        UnfoldObservable<T3> &
        UnfoldObservable<T4> &
        UnfoldObservable<T5>
>;
export function mergeIntoObject<T1, T2, T3, T4, T5, T6>(
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
): Observable<
    UnfoldObservable<T1> &
        UnfoldObservable<T2> &
        UnfoldObservable<T3> &
        UnfoldObservable<T4> &
        UnfoldObservable<T5> &
        UnfoldObservable<T6>
>;
export function mergeIntoObject(
    ...streams: Array<Observable<any>>
): Observable<any>;
export function mergeIntoObject(...streams: Array<Observable<any>>) {
    return combineLatest(streams).pipe(
        map(values => Object.assign({}, ...values)),
    );
}
