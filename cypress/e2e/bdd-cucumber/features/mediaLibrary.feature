Feature: Media Library

    Scenario: Search with multiple results in the collection and Assets sections
        Given the user access to the Media Library page
        When the user searches for "coconut" through the search bar
        And the user clicks on the search button
        Then verify that the Sort option has changed to "Relevance" in "both" sections
        And verify that the number of collections found is "3 Collections"
        And verify that the list of collections found is the following:
            | coconuts       |
            | green coconuts |
            | palms          |
        And verify that the number of assets found is "30 Assets"
        And verify that the list of assets found is the following:
            | cocnut 17          |
            | Coconut            |
            | coconut 1          |
            | coconut 10         |
            | coconut 11         |
            | coconut 12         |
            | coconut 13         |
            | coconut 14         |
            | coconut 15         |
            | coconut 16         |
            | coconut 18         |
            | coconut 19         |
            | coconut 2          |
            | coconut 20         |
            | coconut 21         |
            | coconut 22         |
            | coconut 23         |
            | coconut 24         |
            | coconut 25         |
            | coconut 26         |
            | coconut 27         |
            | coconut 28         |
            | coconut 3          |
            | coconut 4          |
            | coconut 5          |
            | coconut 6          |
            | coconut 7          |
            | coconut 8          |
            | coconut 9          |
            | coconut_28_resized |

    Scenario: Search with single results in the collection and Assets sections
        Given the user access to the Media Library page
        When the user searches for "vehicle" through the search bar
        And the user clicks on the search button
        Then verify that the Sort option has changed to "Relevance" in "both" sections
        And verify that the number of collections found is "1 Collection"
        And verify that the list of collections found is the following:
            | palms |
        And verify that the number of assets found is "1 Asset"
        And verify that the list of assets found is the following:
            | coconut 18 |

    Scenario: Search with no results
        Given the user access to the Media Library page
        When the user searches for "avatar" through the search bar
        And the user clicks on the search button
        Then verify that the collection section is not presented
        And verify that the asset section is not presented
        And verify that a message is displayed "Hm, we can't find any matches for" and contains the search key "avatar"
        And verify that a sub-section is displayed and contains "Have you checked the spelling? Try a different search term."


