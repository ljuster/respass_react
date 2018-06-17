import { curry } from 'lodash/fp'

/**
 * Returns a List of entities from an entity Map based on a List of ids.
 * @param  {Immutable Map}   entities   An immutable Map of entities with ids matching keys.
 * @param  {Immutable List}  ids        An immutable List of ids.
 * @return {Immutable List}             An immutable List of Maps targeted by the list of ids.
 */
export const collectEntities = curry(
  (entities, ids = []) =>
    ids.map(id => entities ? entities.get(id) : {})
)
