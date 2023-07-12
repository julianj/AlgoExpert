<?php
function permute($arr, $start = 0, &$result = []) {
  if ($start === count($arr) - 1) {
    $result[] = $arr; // add the array to the result
  } else {
    for ($i = $start; $i < count($arr); $i++) {
      // swap the elements at indices $start and $i
      [$arr[$start], $arr[$i]] = [$arr[$i], $arr[$start]];
      permute($arr, $start + 1, $result);
      // swap back the elements at indices $start and $i to backtrack
      [$arr[$start], $arr[$i]] = [$arr[$i], $arr[$start]];
    }
  }
  return $result;
}

function permute2($arr) {
    $result = [];
    if (count($arr) === 0) {
        return [];
    }

    if (count($arr) === 1) {
        return [$arr];
    }

    for ($i=0; $i < count($arr); $i++) {
        $currentNum = $arr[$i];
        $remainingNums = array_merge(array_splice($arr, 0, $i), array_splice($arr, $i+1));
        $remainingNumsPermuted = permute2($remainingNums);
        for ($j=0; $j<count($remainingNumsPermuted); $j++) {
            $permutedArray = array_merge([$currentNum], $remainingNumsPermuted[$j]);
            array_push($result, $permutedArray);
        }
    }
    return $result;
}

function permute3($arr) {

    $result = [];
    if (count($arr) === 0) {
        return [];
    }

    if (count($arr) === 1) {
        return $arr;
    }

    for ($i=0; $i < count($arr); $i++) {
        $remainingNums = array_merge(array_splice($arr, 0, $i), array_splice($arr, $i+1));
        $remainingNumsPermuted = permute3($remainingNums);
        array_push($result, array_merge([$arr[$i]], $remainingNumsPermuted));
        array_push($result, array_merge($remainingNumsPermuted, [$arr[$i]]));
    }
    return $result;
}

$arr = [1, 2, 3, 4];
$result = permute($arr);
print_r($result);