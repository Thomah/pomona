import {Entity, model, property} from '@loopback/repository';

@model()
export class DialogLineTransition extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  wait: number;

  @property({
    type: 'number',
  })
  previous?: number;

  @property({
    type: 'number',
  })
  next?: number;

  constructor(data?: Partial<DialogLineTransition>) {
    super(data);
  }
}

export interface DialogLineTransitionRelations {
  // describe navigational properties here
}

export type DialogLineTransitionWithRelations = DialogLineTransition & DialogLineTransitionRelations;
