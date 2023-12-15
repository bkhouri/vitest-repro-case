

import {expect, test, vi } from 'vitest'
import { getShortName } from './name'

test("test getShortImageName returns expected", async ()=> {
    const label = "fof"
    const expected = ""

    function getImageName() {
        return label
    }

    console.log("GIVEN we have the label", label)
    const imageManifest = await import('./name')
    imageManifest.getName = vi.fn().mockReturnValue(label)

    expect(getImageName()).toEqual(label)

    console.log("WHEN we call getShortImageName(",label,")")
    const actual = getShortName()

    console.log("THEN we expect it to return ", expected)
    expect(actual).toEqual(expected)
})